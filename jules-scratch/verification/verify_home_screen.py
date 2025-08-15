import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:8081/", timeout=60000)

        # Get the page content and print it
        content = await page.content()
        print(content)

        # Take a screenshot anyway for diagnostics
        await page.screenshot(path="jules-scratch/verification/diagnostic_screenshot.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
