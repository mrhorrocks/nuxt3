<script setup>
const { data: teams } = await useFetch('https://mrhorrocks.github.io/data/premierleague.json')

</script>

<template>
    <Head>
        <Title>A Nuxt 3 Project - Git Api</Title>
        <Meta name="description" content="Git Api" />
    </Head>

    <h2 class="page-heading">Git Api</h2>

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
                    <td colspan="10">Last updated 17th November 2023 at 12:44</td>
                </tr>
            </tfoot> -->
        </table>

        <br><br>

        <!-- <div v-for="item in teams" :key="item.position">

            <img :src="item.badgeUrl" width="50">
            <ul>
                <li>Position: {{ item.position }}</li>
                <li>Team: {{ item.teamname }}</li>
                <li>Played: {{ item.played }}</li>
                <li>Won: {{ item.won }}</li>
                <li>Drawn: {{ item.drawn }}</li>
                <li>Lost: {{ item.lost }}</li>
                <li>For: {{ item.for }}</li>
                <li>Against: {{ item.against }}</li>
                <li>GD: {{ item.GD }}</li>
                <li>Points: {{ item.points }}</li>
            </ul>

            <br>
            <br>

        </div> -->

    </section>
</template>

<style lang="scss" scoped>
table.premtable {
    th {
        text-align: left;
    }
    tbody {
        tr {
            td {
                line-height: 40px;
                &:nth-of-type(1) {
                    margin-left: 5px;
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
                background-color: lighten(#6b717f, 20%);
            }
        }
    }
    tfoot td {
        padding-top: 20px;
    }
}

</style>