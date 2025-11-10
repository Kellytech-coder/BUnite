export default function BusinessProfilePage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Business Profile</h1>
      <p>Business ID: {params.id}</p>
    </main>
  )
}