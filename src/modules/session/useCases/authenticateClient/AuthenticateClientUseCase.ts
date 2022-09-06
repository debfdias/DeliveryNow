import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/prismaClient';
import { authConfig } from '../../../../config/auth';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient): Promise<string> {
    const client = await prisma.clients.findFirst({
      where: {
        username: { 
          equals: username, 
          mode: 'insensitive' 
        }
      }
    });
    
    if (!client) {
      throw new Error('Username or password are invalid');
    }
    
    const passwordMatch = await compare(password, client.password);
    
    if (!passwordMatch) {
      throw new Error('Username or password are invalid.');
    }
    
    const token = sign({ username }, authConfig.secret_token, {
      subject: client.id,
      expiresIn: authConfig.expires_in_token
    });
    
    return token;
  }
}