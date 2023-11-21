<script setup>
const { data: teams } = await useFetch('https://mrhorrocks.github.io/data/premierleague.json')

</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - Git Api</Title>
        <Meta name="description" content="Git Api" />
    </Head>

    <h2 class="page-heading">Git Api</h2>

    <p>This page shows data from an api that I am hosting on my Git repo. That repo can be seen  
        <NuxtLink external href="https://github.com/mrhorrocks/mrhorrocks.github.io/blob/main/data/premierleague.json" title="Git Api" class="underline">here.</NuxtLink>
    </p>

    <section aria-label="Git Api">

        <table border="1" width="100%" cellpadding="1" cellspacing="1" class="premtable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>For</th>
                    <th>Against</th>
                    <th>GD</th>
                    <th>Points</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in teams" :key="item.position">
                    <td>{{ item.position }}</td>
                    <td><img :src="item.badgeUrl" width="20" alt="{{ item.teamname }}"> {{ item.teamname }}</td>
                    <td>{{ item.played }}</td>
                    <td>{{ item.won }}</td>
                    <td>{{ item.drawn }}</td>
                    <td>{{ item.lost }}</td>
                    <td>{{ item.for }}</td>
                    <td>{{ item.against }}</td>
                    <td>{{ item.GD }}</td>
                    <td>{{ item.points }}</td>
                </tr>
            </tbody>

            <!-- <tfoot>
                <tr>
                    <td colspan="10">Last updated ##th ### 2023</td>
                </tr>
            </tfoot> -->
        </table>

    </section>
</template>

<style lang="scss" scoped>
table.premtable {
    th {
        text-align: left;
        &:nth-of-type(1) {
            text-align: center;
        }
    }
    tbody {
        $top-places: #b3ffb3;
        $bottom-places: #ffadad;
        tr {
            td {
                line-height: 40px;
                &:nth-of-type(1) {
                    text-align: center;
                }
            }
            img {
                margin: 10px 10px 0 0;
                float: left;
                vertical-align: middle;

            }
            &:nth-of-type(4), &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(17) {
                border-bottom: 2px dotted var(--light-grey);
            }
            &:nth-of-type(1) {
                background-color: $top-places;
            }
            &:nth-of-type(2) {
                background-color: lighten($top-places, 4%);
            }
            &:nth-of-type(3) {
                background-color: lighten($top-places, 8%);
            }
            &:nth-of-type(4) {
                background-color: lighten($top-places, 12%);
            }
            &:nth-of-type(18) {
                background-color: lighten($bottom-places, 12%);
            }
            &:nth-of-type(19) {
                background-color: lighten($bottom-places, 8%);
            }
            &:nth-of-type(20) {
                background-color: lighten($bottom-places, 4%);
            }
        }
    }
    tfoot td {
        padding-top: 20px;
    }
}

</style>