import { useState } from 'react';

export const GithubSearch = () => {
  const [value, setValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/github-stats?username=${value}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al buscar usuario');
      }

      setUserData(data);
      setValue('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex space-y-4 justify-center">
        <div className="flex items-center space-x-2">
          <label htmlFor="github-user" className="text-sm font-medium">
            Usuario de GitHub:
          </label>
          <input
            id="github-user"
            name="github-user"
            value={value}
            type="text"
            placeholder="github_user"
            className="border rounded-md px-3 py-1"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-8 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50 border border-indigo-400"
            disabled={loading || !value.trim()}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {userData && (
        <div className="mt-4 space-y-4">
          <div className="relative p-4 bg-bg-card rounded-md z-50 border dark:border-zinc-800">
            <h2 className="text-xl font-bold">{userData.data.user.name}</h2>
            <p className="text-gray-600">{userData.data.user.bio}</p>
            <div className="mt-2">
              <p>Repositorios: {userData.data.user.public_repos}</p>
              <p>
                Lenguaje más usado: {userData.most_used.name} (
                {userData.most_used.percentage}%)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userData.data.repos.map((repo) => (
              <div
                key={repo.name}
                className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-md"
              >
                <h3 className="font-bold">{repo.name}</h3>
                <p className="text-sm text-text-second">{repo.description}</p>
                <div className="mt-2 text-sm">
                  <span className="mr-3">⭐ {repo.stars}</span>
                  <span>{repo.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
