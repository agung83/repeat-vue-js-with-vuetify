<template>
  <v-container class="mt-6">
    <div>
      <FormComponents :title="`ini title`" @changeEventValue="dataForm" />
    </div>
  </v-container>
</template>

<script>
import FormComponents from "./FormComponents.vue";

export default {
  name: "HelloWorld",
  components: {
    FormComponents,
  },
  data: () => ({
    harga: "",
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  watch: {
    harga: function (newValue) {
      console.log(newValue);
      let a = newValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.harga = a;
      console.log(
        this.harga.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "")
      );
    },
  },
  methods: {
    handleQtyInput(newValue) {
      //Make sure the stored qty is not formatted
      let a = newValue
        .toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.harga = a;
    },
    dataForm(val) {
      console.log(val);
    },
  },
};
</script>
