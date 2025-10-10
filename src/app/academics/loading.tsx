export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-apex-midnight text-apex-platinum py-16">
        <div className="container mx-auto px-4">
          <div className="h-12 bg-apex-platinum/20 rounded-lg w-64 mb-4 animate-pulse"></div>
          <div className="h-6 bg-apex-platinum/10 rounded-lg w-96 animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Skeleton */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-100 rounded-lg w-full animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded-lg w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded-lg w-full animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded-lg w-4/5 animate-pulse"></div>
            </div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <div className="h-8 bg-gray-200 rounded-lg w-1/2 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-20 bg-gray-100 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
