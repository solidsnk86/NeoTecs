import { exec } from 'child_process';
import { promisify } from 'util';

// Convertir exec a Promise
const execAsync = promisify(exec);

// Función para obtener datos usando GitHub CLI
const getGithubCli = async (username) => {
  try {
    const { stdout: userData } = await execAsync(`gh api users/${username}`);
    const userJson = JSON.parse(userData);

    const { stdout: reposData } = await execAsync(
      `gh api users/${username}/repos`,
    );
    const reposJson = JSON.parse(reposData);

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
        language: repo.language,
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

    return filteredData;
  } catch (error) {
    throw new Error(`Error al obtener datos de GitHub: ${error.message}`);
  }
};

export default async function githubStats(req, res) {
  try {
    const username = req.query.username || 'solidsnk86';
    const data = await getGithubCli(username);

    res.status(200).json({
      success: true,
      my_github_stats: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error del servidor',
      error: error.message,
    });
  }
}
