<template>
  <v-card elevation="2" class="py-5 px-5">
    <v-row>
      <v-col cols="12" md="6">
        <h1>
          {{ title }}
        </h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          dense
          outlined
          filled
          label="nama depan"
          v-model="namaDepan"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          dense
          outlined
          filled
          label="nama belakang"
          v-model="namaBelakang"
        ></v-text-field>
      </v-col>
    </v-row>
    {{ people }}
    <v-btn depressed @click="onSubmit" color="primary"> Primary </v-btn>
  </v-card>
</template>

<script>
import { capitalizeFirstLetter, getDataTes } from "../utils";

export default {
  name: "FormComponents",
  props: ["title"],
  data: () => ({
    namaDepan: "",
    namaBelakang: "",
    people: null,
  }),
  created() {
    console.log("wjwjwjwjww");
  },
  async mounted() {
    let data = await getDataTes();
    this.people = data.result;
  },
  methods: {
    async onSubmit() {
      let data = await getDataTes();
      this.people = data.result;
      this.$emit("changeEventValue", {
        nama_depan: this.namaDepan,
        nama_belakang: this.namaBelakang,
        helper: capitalizeFirstLetter("bgung laksmana"),
      });
    },
  },
};
</script>