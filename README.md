# xuelanwu

:seedling: I'm a Full Stack developer with a STEM background. <br />
:seedling: I am passionate about working with users and developing solutions that deliver an amazing user experience. <br />
:seedling: I experience developing full-stack applications across multiple platforms using JavaScript, React, Redux, SQL, Python.

<!--START_SECTION:waka-->
name: Waka Readme

on:
  schedule:
    # Runs at 12am IST
    - cron: '30 18 * * *'
  workflow_dispatch:
jobs:
  update-readme:
    name: Update Readme with Metrics
    runs-on: ubuntu-latest
    steps:
      - uses: anmol098/waka-readme-stats@master
        with:
          WAKATIME_API_KEY: ${{ secrets.waka_458a89a1-7ec4-408d-8f56-3bdc700b4942 }}
          GH_TOKEN: ${{ secrets.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 }}
<!--END_SECTION:waka-->
