// SSG: ビルド時に生成される静的ページ
// この時刻はビルド時に固定され、リロードしても変わらない

const buildTime = new Date().toISOString();

export default function SsgPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">SSG ページ</h1>
      <p className="text-xl">ビルド時刻 (ビルド時に固定):</p>
      <p className="text-2xl font-mono text-green-600 mt-2">{buildTime}</p>
      <p className="text-gray-600 mt-4">※ ページをリロードしても時刻は変わりません (ビルド時刻が表示されます)</p>
    </div>
  );
}