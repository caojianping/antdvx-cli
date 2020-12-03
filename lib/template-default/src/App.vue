<template>
    <a-config-provider :locale="locale">
        <a-spin class="app-spin" v-cloak :spinning="isFullLoading" tip="加载中...">
            <router-view></router-view>
        </a-spin>
    </a-config-provider>
</template>

<script src="./App.ts" />
