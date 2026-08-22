import { Args, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { PrismaService } from './prisma.service';

@ObjectType()
class Profile {
  @Field()
  name!: string;

  @Field()
  headline!: string;

  @Field()
  summary!: string;
}

@ObjectType()
class Project {
  @Field()
  id!: number;

  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  result!: string;
}

@InputType()
class ContactRequestInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(80)
  name!: string;

  @Field()
  @IsEmail()
  @MaxLength(160)
  email!: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(2000)
  message!: string;
}

@ObjectType()
class ContactRequestResult {
  @Field(() => Int)
  id!: number;

  @Field()
  accepted!: boolean;
}

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => Profile)
  async profile(): Promise<Profile> {
    const profile = await this.prisma.profile.findFirst({ orderBy: { id: 'asc' } });

    if (!profile) {
      throw new Error('Profile is not configured. Run the Prisma seed first.');
    }

    return profile;
  }

  @Query(() => [Project])
  projects(): Promise<Project[]> {
    return this.prisma.project.findMany({ orderBy: { sortOrder: 'asc' } });
  }

  @Mutation(() => ContactRequestResult)
  async sendContactRequest(
    @Args('input') input: ContactRequestInput,
  ): Promise<ContactRequestResult> {
    const name = input.name.trim();
    const email = input.email.trim().toLowerCase();
    const message = input.message.trim();

    if (!name || !message) {
      throw new BadRequestException('Name and message are required');
    }

    const request = await this.prisma.contactRequest.create({
      data: { name, email, message },
    });

    return { id: request.id, accepted: true };
  }
}
