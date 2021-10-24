<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
            <router-link
                to="/"
                tag="b-navbar-nav"
                exactActiveClass="active" > Vue Router </router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link
                        to="/"
                        tag="b-nav-item"
                        exactActiveClass="active" > Home </router-link>
                    <router-link
                        to="/about-us"
                        tag="b-nav-item"
                        exactActiveClass="active" > About-Us </router-link>
                    <router-link
                        to="/user"
                        tag="b-nav-item"
                        exactActiveClass="active" > ListUser </router-link>
                    <router-link
                        to="/login"
                        tag="b-nav-item"
                        exactActiveClass="active" > Login </router-link>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name:'comp-menu',
    data(){
        return{}
    }
}
</script>

<style>

</style>