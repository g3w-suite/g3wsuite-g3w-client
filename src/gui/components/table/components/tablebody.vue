<template>
  <tbody id="table_body_attributes">
    <tr role="row" class="feature_attribute"
        :id="'open_table_row_' + index"
        v-for="(feature, index) in features" :key="index"
        @mouseover="zoomAndHighLightSelectedFeature(feature, false)"
        @click="zoomAndHighLightSelectedFeature(feature); toggleRow(index)"
        :selected="selectedRow === index"
        :class="[index %2 == 1 ? 'odd' : 'pair', {geometry: hasGeometry}]">
      <td v-for="header in headers" :tab-index="1">
        <field :state="{value: feature.attributes[header.name]}"></field>
      </td>
    </tr>
  </tbody>
</template>

<script>
  const Field = require('gui/components/fields/g3w-field.vue');
  export default {
    name: "table-body",
    props: {
      headers: {
        required: true,
        type: Array
      },
      features: {
        required: true,
        type: Array
      },
      zoomAndHighLightSelectedFeature: {
        type: Function
      },
      hasGeometry: {
        type: Boolean
      }
    },
    data() {
      return {
        selectedRow: null
      }
    },
    methods: {
      toggleRow(index) {
        this.selectedRow = this.selectedRow === index ? null : index;
      }
    },
    components: {
      Field
    }
  }
</script>

<style scoped>

</style>
