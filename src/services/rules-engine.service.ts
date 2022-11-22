import { Engine, RuleProperties } from 'json-rules-engine';
import {
  EligibilityStatus,
  Rule,
  RuleGroup,
} from '../types/content/sanity.content';

export const evaluate = async (ruleGroups: Array<RuleGroup>, facts: any) => {
  const engine = new Engine();
  for (const ruleGroup of ruleGroups) {
    for (const rule of ruleGroup.rules) {
      const rules = frameRule(rule, ruleGroup.ruleGroupType);
      engine.addRule(rules);
    }
  }
  return engine.run(facts).then(({ events }) => {
    if (events && events.length === 0) {
      return EligibilityStatus.NO;
    }
    return events[0].type;
  });
};

export const frameRule = (
  rule: Rule,
  ruleType: EligibilityStatus
): RuleProperties => {
  // TODO - Refactor the condition
  return {
    conditions: {
      all: rule.conditions.map((condition) => ({
        fact: condition.fieldName,
        operator: condition.operator,
        value: ['in', 'notIn'].includes(condition.operator)
          ? condition.fieldValues
          : condition.fieldValue,
      })),
    },
    event: {
      type: ruleType,
    },
  };
};
