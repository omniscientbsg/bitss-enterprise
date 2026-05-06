import sys
content = open(r'C:\Users\Admin\Documents\BITSS\src\app\page.tsx', 'r', encoding='utf-8').read()

target = '''            ))}
          </div>
        </section>

        {/* ELEGANT PHILOSOPHY'''

replacement = '''            ))}
            
            {/* Added View All Button at the bottom of the list */}
            <div className="flex justify-center mt-12 mb-4 relative z-10 w-full">
              <Link href="/deployments" className="font-mono text-[11px] font-medium tracking-[0.1em] text-void uppercase px-8 py-3.5 bg-white rounded-full hover:bg-accent2 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-3 group">
                View All Deployments 
                <span className="transform group-hover:translate-x-1 transition-transform">?</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ELEGANT PHILOSOPHY'''

if target in content:
    content = content.replace(target, replacement)
    open(r'C:\Users\Admin\Documents\BITSS\src\app\page.tsx', 'w', encoding='utf-8').write(content)
    print('Replaced successfully')
else:
    print('Target not found')
