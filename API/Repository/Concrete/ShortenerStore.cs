using Models.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Concrete
{
    public class ShortenerStore : Store<ShortenModel>
    {
        private FakeStore _store;
        public ShortenerStore(FakeStore store)
        {
            _store = store;
        }

        public override void Create(ShortenModel Model)
        {
            _store.Create(Model);
        }

        public override IQueryable<ShortenModel> GetByCondition(Expression<Func<ShortenModel, bool>> expression)
        {
            return _store.GetByCondition(expression);
        }
    }

    public class FakeStore
    {
        private List<ShortenModel> _data;
        public FakeStore()
        {
            if (_data == null)
            {
                _data = new List<ShortenModel>();
            }
        }
        public void Create(ShortenModel Model)
        {
            _data.Add(Model);
        }

        public IQueryable<ShortenModel> GetByCondition(Expression<Func<ShortenModel, bool>> expression)
        {
            if(_data == null || _data.Count() == 0)
            {
                return default;
            }
            return _data.AsQueryable<ShortenModel>().Where(expression);
        }

    }
}
