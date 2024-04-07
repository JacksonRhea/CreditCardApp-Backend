import pool from '../dbClient'

class UserService {
  async insertUser(firstName: string, lastName: string, email: string, password: string) {
    console.log("Service")
    
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const result = await client.query(
        'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
        [firstName, lastName, email, password]
      );

      await client.query('COMMIT')

      return result.rows[0]

    } catch (error) {

      await client.query('ROLLBACK')
      throw error;

    } finally {
      client.release();
    }
  }
}

export default new UserService();