
<!--
Example of a dynamic Vuex module to validate a list of properties with a set
of validation rules. For the validation itself, the Vuelidate-plugin is
used (https://monterail.github.io/vuelidate/).
The module can be registered at runtime like this:
store.registerModule("validations", ValidationEngine(store));
-->
<script>
import { required, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import Vue from "vue";

const validators = new Map();
validators.set("required", required);
validators.set("minLength", minLength);

// Example validation rules:
const FormValidations = [
  {
    path: "firstname",
    rules: [{ id: "required" }]
  },
  {
    path: "lastname",
    rules: [{ id: "required" }, { id: "minLength", args: [4] }]
  }
];

export default function(store) {
  // Instantiate a local component for the validation itself.
  // The computed props and the validation-object is generated base on the FormValidations-array
  const validationComponent = new Vue({
    mixins: [validationMixin],
    computed: {
      ...generateComputedProperties(FormValidations, store)
    },
    validations: {
      ...generateValidationsObj(FormValidations)
    }
  });

  // Vuex-module. The vState-getter returns the validation state
  return {
    namespaced: true,
    state: {},
    getters: {
      vState() {
        return validationComponent.$v;
      }
    },
    actions: {
      touchValue(context, path) {
        validationComponent.$v[path].$touch();
      }
    },
    mutations: {}
  };
}

const accessObjectByStringPath = (stringPath, target) =>
  stringPath.split(".").reduce((o, i) => o[i], target);

const generateComputedProperties = (props = [], store) => {
  return props.reduce((obj, prop) => {
    const computedProp = () => {
      return accessObjectByStringPath(prop.path, store.state.fd);
    };
    obj[prop.path] = computedProp;
    return obj;
  }, {});
};

const generateValidationsObj = rulesArray => {
  let validations = rulesArray.reduce((obj, ruleObj) => {
    let rule = {};
    ruleObj.rules.map(currentRule => {
      if (currentRule.args)
        rule[rule.id] = validators.get(currentRule.id)(...currentRule.args);
      else rule[currentRule.id] = validators.get(currentRule.id);
    });
    obj[ruleObj.path] = rule;
    return obj;
  }, {});

  return validations;
};
</script>
