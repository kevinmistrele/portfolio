@echo off
setlocal
set REPO=https://github.com/kevinmistrele/portfolio.git
echo Publishing portfolio to %REPO%
git init
git add .
git commit -m "feat: portfolio 3D com previews do GitHub e i18n"
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO%
git push -u origin main
echo.
echo Done. Now enable: Settings - Pages - Source: GitHub Actions
pause
