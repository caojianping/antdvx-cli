<template>
    <a-config-provider :locale="locale">
        <div v-cloak style="height: 100vh">
            <a-spin class="bcb-spin" :spinning="isFullLoading" tip="加载中...">
                <router-view />
            </a-spin>
        </div>
    </a-config-provider>
</template>

<script src="./App.ts" />
