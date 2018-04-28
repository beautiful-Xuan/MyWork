import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import sysIndex from '@/views/systemIndex/Index'
import parentNav from '@/views/parentNav'
import system from '@/views/system'
import home from '@/views/home'
// import mainTemplate from '@/views/mainTemplate'
import Department from '@/views/systemManagement/Department'
import Role from '@/views/systemManagement/Role'
import Member from '@/views/systemManagement/Member'
import Limit from '@/views/systemManagement/Limit'
import limitSet from '@/views/systemManagement/limitSet'
import roleSet from '@/views/systemManagement/roleSet'
import adjustPerson from '@/views/systemManagement/adjustPerson'
import addMember from '@/views/systemManagement/addMember'

Vue.use(Router)

export default new Router({
    routes: [ {
            path: '/',
            name: 'parentNav',
            component: parentNav,
            children: [

                {
                    path: 'home',
                    name: 'home',
                    component: home,
                    children: [
                        {
                            path: 'index',
                            name: 'sysIndex',
                            component: sysIndex
                        }
                    ]
                },
                {
                    path: 'system',
                    name: 'system',
                    component: system,
                    children: [
                        {
                            path: 'department',
                            name: 'Department',
                            component: Department
                        }, {
                            path: 'role',
                            name: 'Role',
                            component: Role
                        }, {
                            path: 'roleSet/:name',
                            name: 'roleSet',
                            component: roleSet
                        }, {
                            path: 'adjustPerson/:nowPath/:prvePath',
                            name: 'adjustPerson',
                            component: adjustPerson
                        }, {
                            path: 'member',
                            name: 'Member',
                            component: Member
                        }, {
                            path: 'addMember/:id',
                            name: 'addMember',
                            component: addMember
                        }, {
                            path: 'limit',
                            name: 'Limit',
                            component: Limit
                        }, {
                            path: 'limitSet/:name',
                            name: 'limitSet',
                            component: limitSet
                        }
                    ]
                }
            ]
        }
    ]
})
