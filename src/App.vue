<template>
  <div id="app">
    <h1>Эксперимент с модулями в store</h1>
    <ul>
      <li>Зарегистрировано модулей: {{ haveModules }}</li>
    </ul>
    <button @click="registerStoreModules">Добавить модули</button>
    <div v-if="level">
      <input v-model="selectedModule"/>
      {{ name }}
    </div>
  </div>
</template>

<script>

    import formModule from './formModule';

    export default {
        name: 'app',
        data () {
            return {
                level: 0,
                haveModules: 0,
                selectedModule: ''
            }
        },
        computed: {
            prefixSelectedModule () {
                return this.selectedModule.toString().split('');
            },
            name () {
                if (!this.prefixSelectedModule.length) return ''
                return this.prefixSelectedModule.reduce(
                    (result, key) => result[key],
                    this.$store.state,
                ).data.name;
            }
        },
        methods: {
            registerStoreModules () {
                this.level++;
                const iterations = Math.pow(10, this.level);
                for (let i = 0; i < iterations; i++) {
                    this.$store.registerModule(this.calculatePrefixStore(i), formModule);
                }
                this.haveModules += iterations;
            },
            calculatePrefixStore (i) {
                let prefix = i.toString();
                for (; prefix.length < this.level;) {
                    prefix = `0${prefix}`;
                }
                return prefix.split('')
            }
        }
    }
</script>
<style>
  #app {

  }
</style>