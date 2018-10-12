<script>
/** Demonstration of a generic input component which gets a binding path to a Vuex-store.
 * The same approach could be used for further computations like validation-rules.
 **/

// get a value out of a nested object with a path in dot notation (obj.prop1.prop2..)
const accessObjectByStringPath = (stringPath, target) =>
  stringPath.split(".").reduce((o, i) => o[i], target);

export default {
  props: {
    binding: {
      type: String,
      required: true
    }
    /* ... further props.. */
  },
  computed: {
    value: {
      get() {
        return accessObjectByStringPath(this.binding, this.$store.state);
      },
      set(newVal) {
        this.$store.dispatch("updateFormInput", {
          newVal,
          binding: this.binding
        });
      }
    }
  },
  methods: {
    onInput(evt) {
      const value = evt.target.value;
      this.value = value;
      this.$emit("input", value);
    },
    onChange(evt) {
      const value = evt.target.value;
      this.$emit("change", value);
    }
  },
  render(h) {
    return h("input", {
      ref: "input",
      attrs: {
        /* ...add further attributes as needed */
        value: this.value
      },
      on: {
        ...this.$listeners,
        input: this.onInput,
        change: this.onChange
      }
    });
  }
};
</script>
