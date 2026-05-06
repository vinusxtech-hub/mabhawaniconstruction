import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const passwordHash = await bcrypt.hash('admin123', 10);
  
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      passwordHash,
    },
  });

  // Seed site settings
  await prisma.siteSettings.create({
    data: {
      companyName: 'Maa Bhawani Construction & Contractor',
      phoneNumber: '+91 8319213539',
      email: 'info@maabhawani.com',
    },
  });

  // Seed projects
  const projects = [
    {
      title: '2BHK Residential Home',
      category: 'residential',
      description: 'Complete 2BHK home construction with modern interiors, Kota stone flooring, and premium finishing.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Commercial Shop Complex',
      category: 'commercial',
      description: 'Multi-unit commercial complex with reinforced structure, tile flooring, and electrical work.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1541888082420-ef30af19060d?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Home Renovation Project',
      category: 'renovation',
      description: 'Full interior renovation including marble polishing, wall re-plastering, and modern bathroom fittings.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: '3BHK Villa Construction',
      category: 'residential',
      description: 'Spacious villa with terrace, garden area, premium tile work, and complete interior finishing.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Warehouse Construction',
      category: 'commercial',
      description: 'Industrial-grade warehouse with heavy-duty foundation, steel framing, and concrete flooring.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356f44?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Kitchen & Bathroom Renovation',
      category: 'renovation',
      description: 'Modern kitchen remodel with granite countertops and complete bathroom upgrade with premium tiles.',
      status: 'Completed',
      beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
