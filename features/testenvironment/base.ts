import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { TestEnvReporter } from '../stepdefs/support/stage/crew';

export const baseCrew = [
  new SerenityBDDReporter(),
  ConsoleReporter.forDarkTerminals(),
  new TestEnvReporter(),
];
