<script setup>
const { data: teams, pending, error } = await useFetch('https://mrhorrocks.github.io/data/premierleague.json')
</script>

<script>
import localPremData from '~/assets/data/localPremData.json';

export default {
    data() {
        return {
            localPremData
        };
    },
    methods: {
        // calculateFinance() {
        //     console.log('Finance button clicked');
        //     // e.preventDefault();
        // }
    },
}
</script>

<template>
    <Head>
        <Title>Git Api - Mr.Horrocks</Title>
        <Meta name="description" content="Git Api" />
    </Head>

    <h2 class="page-heading">Git Api</h2>

    <ButtonLink 
        to="https://github.com/mrhorrocks/mrhorrocks.github.io/blob/main/data/premierleague.json" 
        class="w-full sm:w-[initial]" 
        linkText="Go to Api"
        title="https://github.com/mrhorrocks/mrhorrocks.github.io/blob/main/data/premierleague.json" />

    <p>
        
    </p>

    <section aria-label="Git Api">
        <table border="1" width="100%" cellpadding="1" cellspacing="1" class="premtable">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Team</th>
                    <th><span>P</span><span>Played</span></th>
                    <th><span>W</span><span>Won</span></th>
                    <th><span>D</span><span>Drawn</span></th>
                    <th><span>L</span><span>Lost</span></th>
                    <th><span>F</span><span>For</span></th>
                    <th><span>A</span><span>Against</span></th>
                    <th><span>GD</span><span>GD</span></th>
                    <th><span>P</span><span>Points</span></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in teams" :key="item.position">
                    <td v-if="pending" colspan="11">Fetching...</td>
                    <td v-else-if="error" colspan="11">{{ error }}</td>

                    <td>{{ item.position }}</td>
                    <td>
                        <!-- <img :src="item.badgeUrl" width="20" alt="{{ item.teamname }}"> -->
                    </td>
                    <td>{{ item.teamname }}</td>
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
        <br>
        <br>
        

        <table border="1" width="100%" cellpadding="1" cellspacing="1" class="premtable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>
                        <!-- BADGE -->
                    </th>
                    <th>Team</th>
                    <th><span>P</span><span>Played</span></th>

                    <th><span>HW</span><span>HW</span></th>
                    <th><span>HD</span><span>HD</span></th>
                    <th><span>HL</span><span>HL</span></th>
                    <th><span>HF</span><span>HF</span></th>
                    <th><span>HA</span><span>HA</span></th>

                    <th><span>AW</span><span>AW</span></th>
                    <th><span>AD</span><span>AD</span></th>
                    <th><span>AL</span><span>AL</span></th>
                    <th><span>AF</span><span>AF</span></th>
                    <th><span>AA</span><span>AA</span></th>

                    <th><span>GD</span><span>GD</span></th>
                    <th><span>P</span><span>Points</span></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in localPremData" :key="item.position">
                    <td>{{ item.position }}</td>
                    <td><img :src="'https://mrhorrocks.github.io/img/' + item.teamname + '.svg'" width="20"></td>
                    <td>{{ item.teamname }} </td>
                    <td>{{ item.PL }}</td>

                    <td>{{ item.HW }}</td>
                    <td>{{ item.HD }}</td>
                    <td>{{ item.HL }}</td>
                    <td>{{ item.HF }}</td>
                    <td>{{ item.HA }}</td>

                    <td>{{ item.AW }}</td>
                    <td>{{ item.AD }}</td>
                    <td>{{ item.AL }}</td>
                    <td>{{ item.AF }}</td>
                    <td>{{ item.AA }}</td>
                    
                    <td>{{ item.GD }}</td>
                    <td>{{ item.PTS }}</td>
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

<style lang="scss">
table.premtable {
    min-width: 359px;
    th {
        vertical-align: middle;
        text-align: right;
        font-size: 0.9rem;
        font-weight: 500;
        background-color: var(--pale-grey);
        &:nth-of-type(1) {
            border-top-left-radius: 0.25rem;
            text-align: center;
            width: 30px;
        }
        &:nth-of-type(2) {
            width: 30px;
        }
        &:nth-of-type(3) {
            text-align: left;
        }
        &:nth-of-type(8), &:nth-of-type(9) {
            display: none;
            @media screen and (min-width: 1024px) {
                display: table-cell;
            }
        }
        &:last-of-type {
            border-top-right-radius: 0.25rem;
            padding-right: 0.5rem;
        }
        span {
            display: none;
            @media screen and (min-width: 1024px) {
                display: inline
            }
            &:first-of-type {
                display: inline;
                @media screen and (min-width: 1024px) {
                    display: none
                }
            }
        }
    }

    tbody {
        $top-places: #b3ffb3;
        $bottom-places: #ffadad;

        tr {
            td {
                text-align: right;
                vertical-align: middle;
                padding: 0.5rem 0rem;
                font-size: 0.85rem;

                &:nth-of-type(1), &:nth-of-type(2) {
                    text-align: center;
                    padding: 0;
                }
                &:nth-of-type(3) {
                    text-align: left;
                }
                &:nth-of-type(8), &:nth-of-type(9) {
                    display: none;
                    @media screen and (min-width: 1024px) {
                        display: table-cell;
                    }
                }
                &:last-of-type {
                    padding-right: 0.5rem;
                    font-weight: 700;
                }
            }
            img {
                display: inline;
                height: 36px;

            }

            &:nth-of-type(4),
            &:nth-of-type(6),
            &:nth-of-type(7),
            &:nth-of-type(17) {
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
}</style>