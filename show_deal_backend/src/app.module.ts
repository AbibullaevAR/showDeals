import { Module } from '@nestjs/common';
import { LeadModule } from 'src/lead/LeadModule';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    LeadModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist_client'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
