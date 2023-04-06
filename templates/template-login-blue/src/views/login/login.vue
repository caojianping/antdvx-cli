<template>
  <div class="login">
    <div class="login-main">
      <div class="login-banner" />

      <a-form-model class="login-form" ref="form" :model="loginForm" :rules="rules" layout="horizontal">
        <h1 class="login-title">####后台管理系统</h1>

        <h2 class="login-subtitle">用户登录</h2>

        <a-form-model-item label="用户名" prop="username">
          <a-input
            type="text"
            :value="loginForm.username"
            allowClear
            placeholder="请输入用户名"
            @change="handleFormChange('username', $event.target.value)"
            @keyup.enter="submit"
            autocomplete="off"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-model-item>

        <a-form-model-item label="密码" prop="password">
          <a-input
            type="password"
            :value="loginForm.password"
            allowClear
            placeholder="请输入密码"
            @change="handleFormChange('password', $event.target.value)"
            @keyup.enter="submit"
            autocomplete="off"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-model-item>

        <a-button type="primary" block size="large" @click="submit">登录</a-button>
      </a-form-model>
    </div>
  </div>
</template>

<style src="./login.less" lang="less" scoped />

<script src="./login.ts" />
