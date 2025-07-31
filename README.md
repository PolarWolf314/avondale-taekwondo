# Avondale Taekwon-Do Website

A modern website for Avondale Taekwon-Do, a martial arts school based in Avondale, Auckland, New Zealand. The site showcases the school's community-focused approach to teaching traditional Taekwon-Do, featuring information about classes, instructors, and the five tenets of Taekwon-Do.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dynamic Hero Section**: Rotating image carousel showcasing training photos
- **Contact Forms**: Email enquiry system for prospective students
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Fast Performance**: Powered by Next.js 15 with Turbopack

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API integration
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed on your system.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd avondale-taekwondo
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables:

```bash
# Email service configuration
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_contact_email
```

### Development

Start the development server with Turbopack:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page auto-updates as you edit files. Start by modifying `src/app/page.tsx`.

### Building for Production

Build the application:

```bash
bun run build
```

Start the production server:

```bash
bun start
```

### Linting

Run ESLint to check for code quality issues:

```bash
bun run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── join/              # Contact/enquiry page
│   ├── pricing/           # Pricing information
│   └── api/               # API routes (email handling)
├── components/
│   ├── email/             # Email form components
│   ├── layout/            # Header, footer, hero components
│   └── ui/                # Reusable UI components
└── lib/                   # Utility functions
```

## Key Pages

- **Home** (`/`): Hero section with rotating images and key information
- **About** (`/about`): School history, instructors, and achievements
- **Join** (`/join`): Contact form for prospective students
- **Pricing** (`/pricing`): Class schedules and pricing information

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project was built for Avondale Taekwon-Do. As such, please do not use our branding and image. However, feel free to play around with the source code! The code itself is free for modification and comes as-is, without warranty.
