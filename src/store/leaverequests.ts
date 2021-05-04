import ILeaveRequest from '@/types/ILeaveRequest'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import {apiUrl} from '@/config'

@Module({ namespaced: true })
export default class LeaveRequests extends VuexModule {
    leaveRequests = [] as ILeaveRequest[]

    @Action
    async fetchRequests(){
        const response = await fetch(
            `${apiUrl}/leaves/all`
        ).then(r => r.json())
        const data = response.data.requests
        this.context.commit("setRequests", data)
    }

    @Mutation
    setRequests(requests: ILeaveRequest[]){
        this.leaveRequests = [...requests]
    }
    
    @Mutation
    addRequest(request: ILeaveRequest){
        this.leaveRequests = [...this.leaveRequests, request]
    }

    @Mutation
    update(request: ILeaveRequest){
        const requests = [...this.leaveRequests]
        const index = requests.findIndex(r => r.id = request.id)
        requests.splice(index, 1)
        this.leaveRequests = [...requests, request]
    }

}