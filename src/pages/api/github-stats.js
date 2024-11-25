const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const getGithubData = async (username) => {
  try {
    const headers = GITHUB_TOKEN
      ? {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        }
      : {
          Accept: 'application/vnd.github.v3+json',
        };

    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      { headers },
    );
    if (!userResponse.ok) {
      throw new Error(`Error en la API de GitHub: ${userResponse.statusText}`);
    }
    const userJson = await userResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
      { headers },
    );
    if (!reposResponse.ok) {
      throw new Error(`Error al obtener repos: ${reposResponse.statusText}`);
    }
    const reposJson = await reposResponse.json();

    const languages = {};
    reposJson.forEach((repo) => {
      const lang = repo.language || 'Sin especificar';
      languages[lang] = (languages[lang] || 0) + 1;
    });

    const languagesArray = Object.entries(languages)
      .map(([name, count]) => ({
        name,
        count,
        percentage: ((count / reposJson.length) * 100).toFixed(1),
      }))
      .sort((a, b) => b.count - a.count);

    const mostUsed = languagesArray[0] || {
      name: 'Sin lenguajes',
      count: 0,
      percentage: '0.0',
    };

    const filteredData = {
      user: {
        name: userJson.name,
        login: userJson.login,
        avatar: userJson.avatar_url,
        followers: userJson.followers,
        following: userJson.following,
        public_repos: userJson.public_repos,
        bio: userJson.bio,
        location: userJson.location,
        blog: userJson.blog,
      },
      repos: reposJson.map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language || 'Sin especificar',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        size: repo.size,
        default_branch: repo.default_branch,
        is_template: repo.is_template,
        has_pages: repo.has_pages,
      })),
    };

    return {
      filteredData,
      languages: languagesArray,
      mostUsed,
    };
  } catch (error) {
    throw new Error(`Error al obtener datos de GitHub: ${error.message}`);
  }
};

export default async function githubStats(req, res) {
  try {
    const username = req.query.username || 'solidsnk86';
    const data = await getGithubData(username);

    if (req.method !== 'GET') {
      res.status(405).json({ success: false, message: 'Método no permitido!' });
      return;
    }

    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Authorization, Content-Type',
      );
      res.status(204).end();
      return;
    }

    res.status(200).json({
      success: true,
      data: data.filteredData,
      languages: data.languages,
      most_used: data.mostUsed,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error del servidor',
      error: error.message,
    });
  }
}
