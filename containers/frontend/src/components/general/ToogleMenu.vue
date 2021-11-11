<template >

<v-navigation-drawer
      app
      clipped
      dark
      v-model="toogleMenu">
  <v-list>    
      
      <v-img      
      class="pa-8 ma-auto"
      src=@/assets/logo.png
      contain
      max-width="50px"> 
      </v-img>      
    
      <v-card
      class="mx-auto"
      width="300">
        <v-list dense flat color="indigo--text">
          
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>dashboard_customize</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboards</v-list-item-title>
          </v-list-item>

          <v-list-group          
            no-action
            color="blue-gray--text"
            prepend-icon="search">
            
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title>Consultas</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item to="/queries/vehicles">
              <v-list-item-title>Veículos</v-list-item-title>
              <v-icon>mdi-car-side</v-icon>
            </v-list-item>

            <v-list-item to="/queries/tests">              
                <v-list-item-title>Testes</v-list-item-title>
                <v-icon>mdi-list-status</v-icon>
            </v-list-item>

            <v-list-item to="/queries/stats" >              
                <v-list-item-title>Estatísticas</v-list-item-title>
                <v-icon>bar_chart</v-icon>
            </v-list-item>

            <v-list-item to="/queries/timers" >              
                <v-list-item-title>Timers</v-list-item-title>
                <v-icon>timer</v-icon>
            </v-list-item>

          </v-list-group>

          <v-list-group
            no-action
            color="blue-gray--text"
            prepend-icon="description">
            
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title>Relatórios</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item to="/reports/vehicles">
              <v-list-item-title>Veículos</v-list-item-title>
              <v-icon>mdi-car-side</v-icon>
            </v-list-item>

            <v-list-item to="/reports/tests">              
                <v-list-item-title>Testes</v-list-item-title>
                <v-icon>mdi-list-status</v-icon>
            </v-list-item>

            <v-list-item to="/reports/stats" >              
                <v-list-item-title>Estatísticas</v-list-item-title>
                <v-icon>bar_chart</v-icon>
            </v-list-item>

            <v-list-item to="/reports/timers" >              
                <v-list-item-title>Timers</v-list-item-title>
                <v-icon>timer</v-icon>
            </v-list-item>

          </v-list-group>
        
        </v-list>
      </v-card>    
  </v-list>

</v-navigation-drawer>
</template>

<script>
export default {
  name: 'ToogleMenu',
  data() {
    return {
      val: true,
    };
  },
};
</script>

