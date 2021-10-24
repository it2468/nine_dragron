<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="4">
          <b-list-group>
            <!-- <b-list-group-item v-for="(user, index) in listUser" :key="index">{{ user.fullName }}</b-list-group-item> -->
			<router-link 
				v-for="(user, index) in listUser" 
				:key="index"
                :to="`/user/${index + 1}`"
				tag="b-list-group-item"
				exactActiveClass="active" > {{ user.fullName }} </router-link>
          </b-list-group>
        </b-col>
        <b-col sm="8">
			<template v-if="!currentId">
				<h2>Vui lòng chọn 1 user bất kỳ</h2>
			</template>
          <template v-else-if="getCurrentId">
            <b-row>
				<b-col sm="4">Họ và tên:</b-col>
				<b-col sm="8">{{ getCurrentId.fullName }}</b-col>
				<b-col sm="4">Email:</b-col>
				<b-col sm="8">{{ getCurrentId.email }}</b-col>
				<b-col sm="4">Trạng thái:</b-col>
				<b-col sm="8">{{ getCurrentId.isActive }}</b-col>
				<b-col sm="4">Mô tả:</b-col>
				<b-col sm="8">{{ getCurrentId.description }}</b-col>
			</b-row>
          </template>
          <template v-else>
            <p>Không có thông tin người dùng</p>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import listUser from "../mocks/list-user";

export default {
  name: "list-user",
  data() {
    return {
      listUser,
      currentId: null
    };
  },
  created() {
	this.currentId = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      this.currentId = to.params.id;
    }
  },
  computed: {
    getCurrentId() {
      let id = parseInt(this.currentId);
      if (id < 0 && id >= this.listUser.length) return null;
      else return this.listUser[id - 1];
    }
  }
};
</script>

<style>
</style>