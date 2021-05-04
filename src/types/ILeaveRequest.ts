import ERequestStatus from "./ERequestStatus";
import IDelegatee from "./IDelegatee";
import ELeaveType from "./leaves.types";

export default interface ILeaveRequest{
    leaveType: ELeaveType
    details: string
    startDate: string
    endDate: string
    allowance: boolean
    id: number
    delegatee: IDelegatee
    status: ERequestStatus
}