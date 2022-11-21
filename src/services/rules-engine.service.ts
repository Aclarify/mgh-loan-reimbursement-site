import { Engine, RuleProperties } from 'json-rules-engine';
import { RuleGroup } from '../types/content/sanity.content';

export const evaluate = async (ruleGroup: RuleGroup, facts: any) => {
  const engine = new Engine();
  const rules = frameRule(ruleGroup);
  engine.addRule(rules);
  return engine.run(facts).then(({ events }) => {
    if (events && events.length === 0) {
      return 'Not eligible';
    }
    return events[0].type;
  });
};

export const frameRule = (rules: RuleGroup): RuleProperties => {
  // TODO - Refactor the condition
  return {
    conditions: {
      all: rules.rules[0].conditions.map((rule) => ({
        fact: rule.fieldName,
        operator: rule.operator,
        value: ['in', 'notIn'].includes(rule.operator)
          ? rule.fieldValues
          : rule.fieldValue,
      })),
    },
    event: {
      type: 'Eligible',
    },
  };
};
