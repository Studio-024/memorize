import { IuserViewModel } from '@/data/models/userViewModel'

import {RowDataPacket} from 'mysql2'

export interface IUserMysqlViewModel extends IuserViewModel, RowDataPacket{}
