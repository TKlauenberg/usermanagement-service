import { Stage, StageCrewMember } from '@serenity-js/core';
import {
  DomainEvent,
  SceneStarts,
  SceneTagged,
} from '@serenity-js/core/lib/events';
import { ManualTag, Tag } from '@serenity-js/core/lib/model';
import { getEnvironment } from '../../util';

class EnvironmentTag extends Tag {
  static readonly Type = 'environment';
  static fromJSON(o: any) {
    return new EnvironmentTag(o.environmentName);
  }
  constructor(public readonly environmentName: string) {
    super(environmentName, EnvironmentTag.Type);
  }
  toJSON() {
    return {
      name: this.name,
      type: EnvironmentTag.Type,
      environmentName: this.environmentName,
    };
  }
}

export class TestEnvReporter implements StageCrewMember {
  stage?: Stage;
  assignedTo(stage: Stage): StageCrewMember {
    this.stage = stage;
    return this;
  }
  notifyOf(event: DomainEvent): void {
    if (event instanceof SceneStarts) {
      const testenv = getEnvironment();
      this.stage.announce(
        new SceneTagged(
          event.sceneId,
          new EnvironmentTag(testenv),
          this.stage.currentTime(),
        ),
      );
    }
  }
}
