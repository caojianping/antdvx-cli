<template>
    <a-layout class="layout">
        <a-layout-sider v-model="isCollapsed" :trigger="null" collapsible>
            <router-link class="logo" to="/">
                <span v-if="!isCollapsed">####后台管理系统</span>
                <span v-else>Logo</span>
            </router-link>

            <a-menu
                :open-keys="openKeys"
                :selected-keys="selectedKeys"
                mode="inline"
                theme="dark"
                :inline-collapsed="isCollapsed"
                @click="handleMenuClick"
                @openChange="handleMenuChange"
            >
                <a-menu-item key="/home">
                    <router-link to="/home">
                        <a-icon type="home" />
                        <span>首页</span>
                    </router-link>
                </a-menu-item>

                <a-sub-menu v-for="menu in menus" :key="menu.key">
                    <span slot="title">
                        <a-icon :type="menu.icon" />
                        <span>{{ menu.title }}</span>
                    </span>

                    {{ ((submenus = menu.items || []), void 0) }}
                    <a-menu-item v-for="submenu in submenus" :key="submenu.key">
                        <router-link :to="submenu.path">{{ submenu.title }}</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>

        <a-layout>
            <a-layout-header>
                <a-icon class="trigger" :type="isCollapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleSider" />

                {{ ((tokenInfoObj = tokenInfo || {}), void 0) }}
                <p class="welcome">
                    <span>Hi，{{ tokenInfoObj.username || '--' }}，欢迎您的登录！</span>
                    <a-icon type="logout" @click="logout" />
                </p>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style src="./layout.less" lang="less" scoped />

<script src="./layout.ts" />
