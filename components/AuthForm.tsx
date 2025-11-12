'use client';

import React from 'react';

interface AuthFormProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  footer: React.ReactNode;
}

export default function AuthForm({ title, subtitle, children, onSubmit, footer }: AuthFormProps) {
  return (
    <div className="container">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <form onSubmit={onSubmit}>{children}</form>
      {footer}
      <style jsx>{`
        .container {
          max-width: 400px;
          margin: auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
        }
        h1, p {
          text-align: center;
        }
        form {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
