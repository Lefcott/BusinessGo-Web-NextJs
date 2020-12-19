import { runExec, project } from './utils';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec('rm -rf .next');
  await runExec(`mv ${project.path}/.next .`);
})();
