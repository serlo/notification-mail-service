import mysql from 'mysql';
import config from '../config/config';

export const database = mysql.createConnection(config.db);
