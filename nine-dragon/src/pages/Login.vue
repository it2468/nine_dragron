<template>
  <div>
    <b-container>
      <b-form >
        <b-form-group
          label="Email address:"
          description="We'll never share your email with anyone else.">
          <b-form-input
            type="email"
            required
            placeholder="Enter email"></b-form-input>
        </b-form-group>
        <b-form-group
          label="PassWord address:"
          description="We'll never share your email with anyone else.">
          <b-form-input
            type="email"
            required
            placeholder="PassWord email"></b-form-input>
        </b-form-group>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
    name:'login'
};
</script>

<style>
</style>