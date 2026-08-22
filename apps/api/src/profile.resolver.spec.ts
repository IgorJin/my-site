import { ProfileResolver } from './profile.resolver';

describe('ProfileResolver', () => {
  const prisma = {
    profile: {
      findFirst: jest.fn(),
    },
    project: {
      findMany: jest.fn(),
    },
    contactRequest: {
      create: jest.fn(),
    },
  };
  const resolver = new ProfileResolver(prisma as never);

  beforeEach(() => jest.clearAllMocks());

  it('returns the first profile from the repository', async () => {
    const profile = { id: 1, name: 'Игорь', headline: 'Engineer', summary: 'Summary' };
    prisma.profile.findFirst.mockResolvedValue(profile);

    await expect(resolver.profile()).resolves.toEqual(profile);
    expect(prisma.profile.findFirst).toHaveBeenCalledWith({ orderBy: { id: 'asc' } });
  });

  it('returns projects in display order', async () => {
    const projects = [{ id: 1, title: 'Case', description: 'Details', result: 'Result' }];
    prisma.project.findMany.mockResolvedValue(projects);

    await expect(resolver.projects()).resolves.toEqual(projects);
    expect(prisma.project.findMany).toHaveBeenCalledWith({ orderBy: { sortOrder: 'asc' } });
  });

  it('normalizes and saves a contact request', async () => {
    prisma.contactRequest.create.mockResolvedValue({ id: 42 });

    await expect(resolver.sendContactRequest({
      name: '  Test User ',
      email: ' TEST@EXAMPLE.COM ',
      message: '  Hello  ',
    })).resolves.toEqual({ id: 42, accepted: true });

    expect(prisma.contactRequest.create).toHaveBeenCalledWith({
      data: { name: 'Test User', email: 'test@example.com', message: 'Hello' },
    });
  });
});
