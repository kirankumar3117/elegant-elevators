<template>
  <section class="contact container" data-aos="fade-up">
    <h2>Contact Us</h2>
    <el-row :gutter="20">
      <el-col :xs="24" :md="12">
        <el-card>
          <p><strong>Contact Number:</strong> 9396671541</p>
          <p><strong>Mail ID:</strong> info@elegantembedded.com</p>
          <p>
            <strong>Location:</strong><br />3rd Floor, Plot No.7, Surana
            Chowrastha, Phase-2, IDA Cherlapally, Telangana-500051
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-card>
          <el-form>
            <el-form-item>
              <el-input placeholder="Your name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" placeholder="Message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">Send</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  padding: 1rem 0;
}
</style>
