<template>
  <div class="limitSet">
      <v-title :title = 'childTitle' :isShow = 'isShow'></v-title>
      <div class="widthSet">
          <div class="limit-box border">
              <div class="i_title"> 当前权限分组：{{limitGroupName}}</div>
              <div class="body">
                  <div class="table-title border i_title">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  </div>
                  <div>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange"> 
                      <el-row>
                          <div class="checkbox_f_border" style="overflow:hidden;">
                            <el-col :span='4'  v-for="(city,index) in cities"  :key="city">
                                <div class="checkbox_c_border" :class="index==cities.length -1 && (index*1+1)%6 !=0 ? 'rightBorder':''" style="line-height:30px; padding: 5px 20px;">
                                  <el-checkbox :label="city">{{city}}</el-checkbox>
                                </div>
                            </el-col>
                          </div>
                      </el-row>
                    </el-checkbox-group>
                  </div>
              </div>
              <div class="save">
                <div class="saveBtn">
                  <el-button @click="saveSet()">保存设置</el-button>
                </div>
              </div>
          </div>
        <myFooter></myFooter>
      </div>
  </div>
</template>
<script>
import title from "@/components/title";
import footer from "@/components/footer";

const cityOptions = ['上海', '北京', '广州', '深圳','湖南', '郑州', '山西', '杭州'];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      isShow: true,
      childTitle: "权限设置",
      limitGroupName: ''
    };
  },
  created(){
    console.log(this.$route.query.name)
    // this.limitGroupName = this.$route.query.name
    this.limitGroupName = this.$route.params.name
  },
  methods: {

    handleCheckAllChange(val) {
      console.log(val)
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      saveSet(){
        console.log(this.checkedCities)
        // saveLimitSet(option).then(function(res) {
        //   console.log(res);
        //   this.$router.go(-1)
        // });
      }
  },
  components: {
    "v-title": title,
    myFooter: footer
  }
};
</script>
<style>
/* limiSet.css */
</style>

