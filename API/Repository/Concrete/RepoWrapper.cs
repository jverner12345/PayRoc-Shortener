using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Concrete
{
    public class RepoWrapper : IRepoWrapper
    {
        private ShortenerStore _shortener;
        private FakeStore _context;

        public RepoWrapper(FakeStore repoContext)
        {
            _context = repoContext;
        }
        public ShortenerStore Shortener
        {
            get
            {
                if (_shortener == null)
                {
                    _shortener = new ShortenerStore(_context);
                }
                return _shortener;
            }
        }
    }
}
