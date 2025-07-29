<template>

    <div class="xs-nav-all">
        <div class="xs-nav-all-search">search</div>
        <div class="xs-nav-all-menu">
            <div class="" v-for="item in navItems" :key="item.name">
                {{ item.name }}

            </div>
        </div>
    </div>
</template>

<script setup>
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
];
</script>

<style lang="scss" scoped>
.xs-nav-all {
    width: 100%;
    height: 120px;
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    .xs-nav-all-search {
        width: 40%;
        height: 30px;
        background-color: white;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        color: black;
        font-size: 16px;
    }

    .xs-nav-all-menu {
        margin-top: 20px;
        display: flex;
        flex-direction: row;

        div {
            margin: 0 15px;
            background-color: white;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 14px;
            color: black;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>