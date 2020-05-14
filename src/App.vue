<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="display-2" style="margin-left: 5rem; font-weight:bold;"
        >Map
      </span>
    </v-app-bar>

    <baidu-map class="map" center="北京">
      <bm-navigation
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :showZoomInfo="false"
      ></bm-navigation>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
    </baidu-map>
    <v-card class="mx-auto" max-width="344" id="searchCard" :elevation="10">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="keyword"
              label="当前地点"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="location"
              label="目标地点"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="searchRoute" color="primary">
          <!--<v-icon left>mdi-map-search</v-icon>-->
          搜索
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card id="resultCard" class="mx-auto" max-width="1000" :elevation="10">
     <v-card-text>
       {{testResult1}}
     </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

import axios from "axios";

const testResultData = [
  {
    type: "最佳方案",
    distance: 100,
    timeHour: 1,
    timeMin: 10,
  },
  {
    type: "次佳方案",
    distance: 200,
    timeHour: 2,
    timeMin: 30,
  },
];

export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  data: () => ({
    hello: "hello world",
    keyword: "广州市珠江医院",
    location: "广州市南方医院",
    searchResult: testResultData,
    helloworld: "http://192.168.50.117:5000/",
    routeWay1: "http://192.168.50.117:5000/get_way_1_route",
    routeWay2: "http://192.168.50.117:5000/get_way_2_route",
    routeWay3: "http://192.168.50.117:5000/get_way_3_route",
    testResult1: null,
    testResult2: null,
    testResult3: null,
  }),

  methods: {
    searchRoute() {
      // 1
      let params = new URLSearchParams();
      params.append("ori", this.location);
      params.append("des", this.keyword);
      axios
        .get(this.helloworld)
        .then((response) => {
          console.log(response.data);
          this.testResult1 = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      // 2 ----------------------------------
      // axios
      //   .get(this.routeWay2, params)
      //   .then((response) => {
      //     console.log(response.data);
      //     this.testResult2 = response.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // // 3----------------
      // axios
      //   .get(this.routeWay3, params)
      //   .then((response) => {
      //     console.log(response.data);
      //     this.testResult3 = response.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>
<style>
.map {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#searchCard {
  position: fixed;
  top: 5rem;
  left: 10px;
  z-index: 12;
}

#resultCard {
  position: fixed;
  top: 20rem;
  left: 10px;
  z-index: 12;
}

.map {
  width: 100%;
  height: 95%;
  position: fixed;
  top: 3rem;
  left: 0;
  z-index: 1;
}
</style>
