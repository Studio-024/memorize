import { IUserViewModel } from '@/data/models/userViewModel'
import { RowDataPacket } from 'mysql2'

export interface IUserMysqlViewModel extends IUserViewModel, RowDataPacket{}