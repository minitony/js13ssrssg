export default function SsrPage() {
  const currentTime = new Date().toISOString();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">SSR ページ</h1>
      <p className="text-xl">現在時刻 (サーバー側で毎回生成):</p>
      <p className="text-2xl font-mono text-blue-600 mt-2">{currentTime}</p>
      <p className="text-gray-600 mt-4">※ ページをリロードするたびに時刻が更新されます</p>
    </div>
  );
}