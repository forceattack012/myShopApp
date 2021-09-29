const { Pool } = require('pg');
const config  = require('../config/config');
const pool = new Pool(config.postgresql);

function getAllUser() {
  const sql = 'select * from "Users"';

  return new Promise((resolve,reject) => {
    pool.query(sql,(err, result) => {
      if(err){
        return reject(err);
      }
      resolve(result.rows);
    })
  })
}

function getUserById(id){
  const sql = 'select * from "Users" where id = $1';

  return new Promise((resolve,reject) => {
    pool.query(sql, [id], (err, result) => {
      if(err) {
        return reject(err);
      }
      resolve(result.rows);
    })
  })
}

function createUser(name, email) {
  const sql = 'insert into "Users" (name, email) values ($1,$2)';

  return new Promise((resolve,reject) => {
    pool.query(sql, [name,email], (err, result) => {
      if(err){
        return reject(err);
      }
      resolve(`create id : ${result.insertId} successfully`);
    })
  })
}

function updateUser(id, name, email) {
  const sql = 'update "Users" set name = $1, email = $2 where id = $3';

  return new Promise((resolve, reject) => {
    pool.query(sql, [name, email, id], (err, result) => {
      if(err){
        reject(err);
      }
      resolve(`update id : ${id} successfully`);
    })
  })
}

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser
}
